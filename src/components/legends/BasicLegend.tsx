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
        <ul className="legend-labels">
          {props.legendItems.map((item, index) => (
            <li key={index} className="legend-item">
              <span style={{ backgroundColor: item.fillStyle }}></span>
              <span>{item.text}</span>
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
