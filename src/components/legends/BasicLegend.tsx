import Link from "next/link";

/** Basic Legend component. legendItems, legendTitle and (optional) legendSource
 * (link to the source of the data) are passed to this function. */

export default function BasicLegend(props: {
  legendItems: {
    text: string | number;
    fillStyle: string;
  }[];
  legendTitle: string;
  legendSource?: string;
}) {
  return (
    <div className="basic-legend">
      <div className="legend-title">{props.legendTitle}</div>
      <div className="legend-scale">
        <ul>
          {props.legendItems.map((item, index) => (
            <li key={index}>
              <div
                className="legend-item-color"
                style={{ backgroundColor: item.fillStyle }}
              ></div>
              <div className="legend-item-text">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
      {!!props.legendSource && (
        <div className="legend-source">
          An optional Source: <Link href={props.legendSource} />
        </div>
      )}
    </div>
  );
}
