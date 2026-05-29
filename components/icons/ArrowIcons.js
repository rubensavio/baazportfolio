import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function joinClass(base, className) {
  return className ? `${base} ${className}` : base;
}

export function ArrowLinkIcon({ className }) {
  return (
    <span className={joinClass("arrow-link-icon", className)} aria-hidden="true">
      <FiArrowRight />
    </span>
  );
}

export function ArrowUpRightIcon({ className }) {
  return (
    <span
      className={joinClass("arrow-up-right-icon", className)}
      aria-hidden="true"
    >
      <FiArrowUpRight />
    </span>
  );
}

export function ArrowDownIcon({ className }) {
  return (
    <span className={joinClass("arrow-down-icon", className)} aria-hidden="true">
      <FiArrowDown />
    </span>
  );
}

export function ArrowBackIcon({ className }) {
  return (
    <span className={joinClass("arrow-back-icon", className)} aria-hidden="true">
      <FiArrowLeft />
    </span>
  );
}

export { FiChevronLeft, FiChevronRight };
