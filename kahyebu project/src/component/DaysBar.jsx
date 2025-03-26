import {useState, useRef} from "react";
import "./DaysBar.css";

const DaysBar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const days = Array.from({length: lastDay}, (_, i) => i + 1);
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const todayDate = today.getDate();
  const [selectedDate, setSelectedDate] = useState(todayDate);

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 드래그 시작
  // 드래그 시작점 오늘 날짜가 중간쯤에 오게끔 (렌더링 했을 때 보이게끔!)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // 드래그 중
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div
      className="DaysBar"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      {days.map((day) => {
        const weekDay = weekDays[new Date(year, month, day).getDay()];
        const isActive = selectedDate === day;
        return (
          <div key={day} className="day_wrapper">
            <span className="">{weekDay}</span>
            <button
              onClick={() => setSelectedDate(day)}
              className={`day_btn ${isActive ? "active" : ""}`}>
              {day}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default DaysBar;
