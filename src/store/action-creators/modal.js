export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const loadModal = (title, componentToRender) => {
  return {
    type: SHOW_MODAL,
    title,
    componentToRender
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};