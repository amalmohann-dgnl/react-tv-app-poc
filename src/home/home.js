import { useEffect, useState } from 'react';
import './home.css';
import '../components/Rail/row'
import { FocusNode, useSetFocus } from '@please/lrud';
import { motion } from 'framer-motion';
import { endp as endpoint } from '../configs/endpoint-url';
import Row from '../components/Rail/row';
import AxiosRequester from '../services/AxiosRequester';
import railName from '../configs/rail-name';

// I just manually typed this in after rendering out a row...
// In a real app you would be a bit more diligent about making sure that the height
// used to animate and the actual height of the row are one and the same.
const ROW_HEIGHT = 400;


export default function Home({ selectedProfile }) {
  const axiosRequester = new AxiosRequester();

  const [railData, setRailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const [gridPosition, setGridPosition] = useState({
    rowIndex: 0,
    columnIndex: 0,
  });
  const setFocus = useSetFocus();

  if (isLoading) {
    return (
      <div className="home page" style={{ left: 800, top: 300 }}>
        loading...
      </div>
    );
  }

  return (
    <FocusNode
      className="home page"
      isGrid
      focusId="home"
      defaultFocusColumn={gridPosition.columnIndex}
      defaultFocusRow={gridPosition.rowIndex}
      onLeft={(e) => {
        if (gridPosition.columnIndex === 0) {
          e.preventDefault();
          setFocus('nav');
        }
      }}
      onGridMove={(e) => {
        setGridPosition({
          rowIndex: e.nextRowIndex,
          columnIndex: e.nextColumnIndex,
        });
        // setFocus(railName[gridPosition.rowIndex].replaceAll(' ','_')+gridPosition.rowIndex);
      }}
      elementType={motion.div}
      initial={{
        scale: 0.8,
        opacity: 0,
        y: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        y: -ROW_HEIGHT * gridPosition.rowIndex,
      }}
      exit={{
        scale: 1.15,
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}>
      {railData &&
        railData.map((rail, railIndex) => {
          return (

            <Row
              row={rail}
              key={railName[railIndex].replaceAll(' ','_')+railIndex.toString()}
              id={railName[railIndex].replaceAll(' ','_')+railIndex.toString()}
              rowIndex={railIndex}
              // gridPosition={{columnIndex:gridPosition.columnIndex, rowIndex:railIndex}}
            />

          //   <FocusNode
          //   className={classNames('row')}
          //   focusId={'rail_' + railIndex.toString()}
          // >
          //   <div className="row_header">{railName[railIndex]}</div>
          //   <div className="row_titles" style={{}}>
          //     {rail && rail.map((item, titleIndex) => {
          //       return <RailItem key={titleIndex} id={titleIndex + '_' + railName[railIndex]} title={item.label} thumbnail={item.thumbnail} />;
          //     })}
          //   </div>
          // </FocusNode>
            

          );
        })}
    </FocusNode>
  );

  async function fetchData() {
    const saveRailData = [];
    for (let i = 0; i < endpoint.length; i++) {
      await axiosRequester.fetch(endpoint[i]).then((response) => {
        if (response) {
          const fetchedRailData = response[0]?.data?.content.map(
            (contentData, index) => {
              return {
                key: index.toString() + contentData.title + contentData.uid,
                label: contentData.title,
                thumbnail: contentData.images.find((img) => img.width === 288)
                  ?.url,
              };
            }
          );

          saveRailData.push(fetchedRailData);
          console.log('saving');
        }
      });
    }
    setRailData(saveRailData);
    setIsLoading(false);
  }
}
