import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  breadcrumb: { label: string; path: string }[];
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="header-content">
        <h1 className="page-title">{title}</h1>
        <nav className="breadcrumb">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              <Link to={item.path}>{item.label}</Link>
              {index < breadcrumb.length - 1 && " > "}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
