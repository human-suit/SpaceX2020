import { createPortal } from 'react-dom';
import style from './index.module.scss';
import type { itemSpaseX } from '@/entities/model/startSpaceX/types';
import { useEffect } from 'react';
import DefoltImg from '../../assets/notYeat.jpg';
type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: itemSpaseX | null;
};

const modalRoot = document.getElementById('modal-root') || document.body;

export default function Modal({ isOpen, onClose, data }: Props) {
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return createPortal(
    <div
      className={`${style.backdrop} ${style.open}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`${style.modal} ${style.open}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.close} onClick={onClose}>
          ×
        </button>
        <div className={style.scrollContainer}>
          <h2>{data.mission_name}</h2>
          <img
            src={data.links.mission_patch_small || DefoltImg}
            alt="patch"
            width={100}
          />
          <span>Mission name:</span>
          <p>{data.mission_name}</p>
          <span>Rocket name:</span>
          <p>{data.rocket.rocket_name}</p>
          <span>Detail:</span>
          {data.details ? (
            <p>{data.details}</p>
          ) : (
            <p>
              <i>Информация отсутствует</i>
            </p>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
