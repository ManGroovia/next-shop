import React from "react";
export default function Sort() {
  const [open, setOpen] = React.useState(false);
  const [activeType, setActiveType] = React.useState(0);

  const onSelectSort = (i: number) => {
    setActiveType(i);
    setOpen(false);
  };
  const list = ["Сначала дешевле", "Сначала дороже", "По популярности"];
  const selectedSort = list[activeType];
  return (
    <div className="sort">
      <div className="sort_label">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
            fill="#323232"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{selectedSort}</span>
      </div>
      {open && (
        <div className="sort_popup">
          <ul>
            {list.map((name, i) => (
              <li
                key={i}
                onClick={() => onSelectSort(i)}
                className={activeType == i ? "active" : ""}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
