import Link from "next/link";

interface BreadcrumbsItem {
  text: string;
  href: string;
}

interface BreadcrumbsProps{
    items:BreadcrumbsItem[]
}


const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumbs">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {index !== items.length - 1 ? (
                <Link href={item.href}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
              {index !== items.length - 1 && <span> / </span>}
            </li>
          ))}
        </ol>
      </nav>
    );
  };
  export default Breadcrumbs;