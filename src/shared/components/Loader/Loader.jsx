import { RotatingLines } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import css from '../Loader/Loader.module.css';
const loaderRoot = document.querySelector('#loader-root');
export const Loader = () => {
  return createPortal(
    <div className={css.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>,
    loaderRoot
  );
};
