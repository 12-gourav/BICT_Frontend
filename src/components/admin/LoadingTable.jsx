import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingTable = ({ z, obj }) => {
  return (
    <table>
      <thead>
        {obj?.map((s) => (
          <th>{s}</th>
        ))}
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5]?.map((d) => (
          <tr>
            {z?.map((d) => (
              <td style={{ paddingLeft: "1rem" }}>
                <LoadingOutlined />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LoadingTable;
