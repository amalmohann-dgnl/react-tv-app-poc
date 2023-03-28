import { FocusNode } from '@please/lrud';
import './railItem.css';

export default function RailItem(props) {

  const { title, thumbnail,id } = props;

  return (
    <FocusNode className="title" focusId={'railItem_'+id}>
      <img
        src={thumbnail}
        alt={title}
        style={{ width: '100%', objectFit: 'fill', borderRadius: '5px' }}
      />
      <div className="focusMarker">{'-'}</div>
    </FocusNode>
  )
}