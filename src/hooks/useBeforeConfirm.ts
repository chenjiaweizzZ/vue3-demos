import { ElMessageBox } from 'element-plus';
import { h } from 'vue'

interface MessageBoxOptions {
    title?: string;
    showCancelButton?: boolean;
    message: string;
    confirmButtonText?: string;
    onConfirm: () => void;
    imgSrc: string;
}

export const useBeforeConfirm = () => {
    const myMessageBox = (options: MessageBoxOptions) => {
        const { title = "", showCancelButton = false, message, confirmButtonText, onConfirm, imgSrc } = options;
        return ElMessageBox({
            title: '',
            message: h('div', { style: 'color: teal;display:flex;flex-direction: column;align-items:center;padding:30px 0 20px' }, [
                h('img', { src: imgSrc, alt: '提醒', style: 'width:70px;height: 70px' }),
                h('div', { style: 'margin: 10px 0;color: #000000;font-size: 16px;' }, title),
                h('div', { style: 'color: #686868;font-size: 12px' }, message),
            ]),
            showCancelButton: showCancelButton,
            confirmButtonText: confirmButtonText,
            confirmButtonClass: 'btnConfirmClass',
            cancelButtonClass: 'btnCancelClass',
            center: true,
            callback: (action: string) => {
                if (action === 'confirm') {
                    onConfirm();
                }
            }
        });
    };

    return { myMessageBox };
};