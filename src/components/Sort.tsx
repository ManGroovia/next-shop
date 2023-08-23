import React from "react";
export default function Sort({ value, onChangeSortType }) {
  const [open, setOpen] = React.useState(false);

  const onSelectSort = (i: number) => {
    onChangeSortType(i);
    setOpen(false);
  };
  const list = [
    {
      name: "Сначала дешевле",
      sortProperty: "price",
    },
    {
      name: "Сначала дорогие",
      sortProperty: "price",
    },
    {
      name: "Популярности",
      sortProperty: "rating",
    },
  ];
 
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
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort_popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onSelectSort(obj)}
                className={value.sortProperty == obj.sortProperty ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
