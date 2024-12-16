import { ElMessageBox } from 'element-plus';
import { h } from 'vue'

export const useBeforeConfirm = () => {
    const myMessageBox = (options) => {
        const { message, confirmButtonText, onConfirm } = options;
        return ElMessageBox({
            message: h('p', null, [
                h('span', null, message),
                h('i', { style: 'color: teal' }, 'VNode'),
            ]),
            showCancelButton: true,
            confirmButtonText: confirmButtonText,
            confirmButtonClass: 'btnClass',
            center: true,
            callback: action => {
                if (action === 'confirm') {
                    onConfirm();
                }
            }
        });
    };

    return { myMessageBox };
};