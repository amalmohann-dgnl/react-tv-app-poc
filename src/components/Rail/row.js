import { FocusNode, useFocusNodeById } from '@please/lrud';
import classnames from 'classnames';
import './row.css';
import RailItem from '../RailItem/railItem';
import { useEffect, useState } from 'react';
import railName from '../../configs/rail-name';

export default function Row(props) {
  console.log(props);

  const { row, rowIndex, id } = props

  const [translateX, setTranslateX] = useState(0);
  const [columnIndex, setColumnIndex] = useState(0);
  // const focusedRailNode = useFocusNodeById(id);
  // console.log(focusedRailNode);


  useEffect(() => {

    // if (!focusedRailNode.isFocused) return


    const cardWidth = 240;
    const railLength = 1782;
    const trollyLength = row.length * cardWidth;
    let translate = columnIndex * cardWidth;
    if (translate > trollyLength - railLength) {
      translate = trollyLength - railLength;
    }
    if (trollyLength <= railLength) {
      translate = 0;
    }
    translate = translate * -1;
    setTranslateX(translate);

  }, [row, columnIndex]);

  console.log(translateX, rowIndex);

  const transitionStyle = {
    transform: `translateX(${translateX}px)`,
    transition: 'transform 0.5s ease-in-out'
  };


  return (
    <FocusNode 
    className={classnames('row')} 
    focusId={id}
    onLeft={((e)=>{
      console.log(e);
      if(columnIndex>0){
        setColumnIndex(columnIndex - 1)
      }
    })}
    onRight={((e)=>{
      console.log(e);
      if(columnIndex < row.length - 1 ){
        setColumnIndex(columnIndex + 1)
      }
    })}
    >
      <div className="row_header">{railName[rowIndex]}</div>
        <div className="row_titles" style={transitionStyle}>
          {row && row.map((item, titleIndex) => {
            return <RailItem key={titleIndex} id={titleIndex+'_'+railName[rowIndex]} title={item.label} thumbnail={item.thumbnail} />;
          })}
      </div>
   </FocusNode>

  );
}
