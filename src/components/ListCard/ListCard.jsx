/* eslint-disable react/prop-types */
import "./ListCard.css";
import { useAsyncValue } from "react-router-dom";

export async function loader(url) {
    const res = await fetch(url);
    return res.json();
}
function ListCard({ maxEl, children }) {
    const items = useAsyncValue();

    const listItems = items.results.map((item, index) => {
        if (index >= maxEl) return;
        return <li key={item.id}>{children}</li>;
    });

    return <ul className="list">{listItems}</ul>;
}
export default ListCard;
