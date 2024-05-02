import "./table.scss";

const Table = ({
  row1col1,
  row1col2,
  row1col3,
  row1col4,
  row1col5,
  row2col1,
  row2col2,
  row2col3,
  row2col4,
  row2col5,
  row3col1,
  row3col2,
  row3col3,
  row3col4,
  row3col5,
  row4col1,
  row4col2,
  row4col3,
  row4col4,
  row4col5,
  row5col1,
  row5col2,
  row5col3,
  row5col4,
  row5col5,
  row6col1,
  row6col2,
  row6col3,
  row6col4,
  row6col5,
  notes,
  celltypes,
}) => {
  return (
    <div className="table">
      <div className="container">
        <div className="table_wrapper">
          <div className="table_wrapper_heading">
            <h2>Electrical Characteristics</h2>
          </div>
          <div className="table_wrapper_inner">
            <table>
              <tbody>
                {/* <tr>
                  <td className="col1">Model Number</td>
                  <td>{row1}</td>
                  <td>R330P</td>
                  <td>R335P</td>
                </tr> */}

                <tr>
                  <td className="col1">Minimum Power At STC(Pmax)</td>
                  <td>{row1col1}</td>
                  <td>{row1col2}</td>
                  <td>{row1col3}</td>
                  {row1col4 && <td>{row1col4}</td>}
                  {row1col5 && <td>{row1col5}</td>}
                </tr>
                <tr>
                  <td className="col1">Optimal Operating Voltage(Vmp)</td>
                  <td>{row2col1}</td>
                  <td>{row2col2}</td>
                  <td>{row2col3}</td>
                  {row2col4 && <td>{row2col4}</td> }
                  {row2col5 && <td>{row2col5}</td>}
                </tr>
                <tr>
                  <td className="col1">Optimal Operating Current(Imp)</td>
                  <td>{row3col1}</td>
                  <td>{row3col2}</td>
                  <td>{row3col3}</td>
                  {row3col4 && <td>{row3col4}</td>}
                  {row3col5 && <td>{row3col5}</td>}
                </tr>
                <tr>
                  <td className="col1">Open Circuit Voltage(Voc)</td>
                  <td>{row4col1}</td>
                  <td>{row4col2}</td>
                  <td>{row4col3}</td>
                  {row4col4 && <td>{row4col4}</td>}
                  {row4col5 && <td>{row4col5}</td>}
                </tr>
                <tr>
                  <td className="col1">Short Circuit Current(Isc)</td>
                  <td>{row5col1}</td>
                  <td>{row5col2}</td>
                  <td>{row5col3}</td>
                  {row5col4 && <td>{row5col4}</td>}
                  {row5col5 && <td>{row5col5}</td>}
                </tr>
                {(row6col1 || row6col2 || row6col3 || row6col4 || row6col5) && (
                  <tr>
                    <td className="col1">Module Efficiency(%)</td>
                    {row6col1 && <td>{row6col1}</td>}
                    <td>{row6col2}</td>
                    <td>{row6col3}</td>
                    {row6col4 && <td>{row6col4}</td>}
                   {row6col5 && <td>{row6col5}</td>}
                  </tr>
                )}
                <tr>
                  <td className="col1">Cell Type & No. of Cell</td>
                  <td colSpan={5}>{celltypes}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="note">{notes}</div>
        </div>
      </div>
    </div>
  );
};
export default Table;
