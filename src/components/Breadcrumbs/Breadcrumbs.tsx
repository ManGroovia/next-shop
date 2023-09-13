import React, { ReactNode } from "react";
import styles from "../../styles/modules/NextBreadcrumb.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const pathNamesMapping = {
    home: "Главная",
    Smartphones: "Смартфоны",
    computers: "Компьютеры и комплектующие",
    laptops: "Ноутбуки",
  };
 

  return (
    <div>
      <ul className={styles.breadcrumbs}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;

          let itemLink;

          if (typeof pathNamesMapping[link] === "string") {
            itemLink = pathNamesMapping[link];
          } else if (pathNamesMapping[link]?.main) {
            // Это вложенная категория, обработайте ее отдельно
            itemLink = pathNamesMapping[link].main;
          } else {
            itemLink = link; // Вернуть сам путь, если ничего не найдено
          }

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
