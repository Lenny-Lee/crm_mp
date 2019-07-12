import Taro from '@tarojs/taro'

const onAction = () => next => action => {
    const { type, payload } = action;
    const match = type.match(/^toast\/(\w+)/);
    if (match && match.length > 1) {
        const { message, duration, onClose, mask } = payload;
				const method = match[1];
				Taro.showToast({
					title: message,
					icon: 'none',
					duration: duration || 1,
					complete:onClose,
					mask: mask|| true
				})
    } else {
        return next(action);
    }
};

export default {
    onAction
}