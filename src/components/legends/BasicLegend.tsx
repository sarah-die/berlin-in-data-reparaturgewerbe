import Link from "next/link";

export default function BasicLegend(props: {
  legendItems: {
    text: string | number;
    fillStyle: string;
  }[];
}) {
  return (
    <div className="basic-legend">
      <div className="legend-title">The title fooo</div>
      <div className="legend-scale">
        <ul>
          {props.legendItems.map((item, index) => (
            <li key={index}>
              <div className="legend-item-color" style={{ backgroundColor: item.fillStyle }}></div>
              <div className="legend-item-text">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="legend-source">
        An optional Source: <Link href={""} />
      </div>
    </div>
  );
}
