import './asset/index.scss';

class ComView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            startValue: '',
            endValue: '',
            onClick(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let opts = this.options,
            that = this;
        this.addCom([{
            el: '#datepicker-' + opts.vid,
            type: 'range',
            showClose: true,
            showClear: true,
            startValue: opts.startValue,
            endValue: opts.endValue,
            style: {
                float: 'left',
                width: '77%'
            },
            onChange(self, result) {
                console.warn('点击了时间选项框6', result);
            }
        }, {
            el: '#buttons-' + opts.vid,
            type: 'primary',
            text: '搜索',
            style: {
                float: 'right'
            },
            onClick(self) {
                if(typeof opts.onClick == 'function') opts.onClick(opts.context, {
                    startDate: that.$('.startDate').val(),
                    endDate: that.$('.endDate').val()
                });
            }
        }]);
    }
    render() {
        let opts = this.options;
        const vDom = hx`
        <div class="rangedate clearfix">
            <datepicker id="datepicker-${opts.vid}"></datepicker>
            <buttons id="buttons-${opts.vid}"></buttons>
        </div>
        `;
        return vDom;
    }
}
Lego.components('rangedate', ComView);
export default ComView;
