/**
 *  created by ljh on 2018.04.12
 */

 // @flow
import Taro from '@tarojs/taro'


type Error = {
    preventDefault: () => void;
    message: string;
};

export default (error: Error) => {
    error.preventDefault();
		const time = error.message.length > 15 ? 3 : 2;
		Taro.showToast({
			title: error.message,
			icon: 'none',
			duration: time
		})
    // TODO logger...
};
