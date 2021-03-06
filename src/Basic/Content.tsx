import React = require('react');
import RX = require('reactxp');
import AppStyles from './../AppStyles';

type Style = RX.Types.ScrollViewStyleRuleSet;

const standardStyle: Style = RX.Styles.createViewStyle({
    flex: 1,
    backgroundColor: 'transparent',
});

const padder  : Style = {
    padding: AppStyles.contentPadding,
};

export interface IProps extends RX.CommonStyledProps<Style>  {
    padder?: boolean;
}

export class Content extends RX.Component<IProps, {}> {
// export class Content extends RX.ScrollView {
    render (): JSX.Element {
        let style : RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if (this.props.padder) {
            style = RX.Styles.combine<Style>(style, padder);
        }

        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }

        return (
            <RX.ScrollView
              { ...this.props }
              style={ style }
            >
                { this.props.children }
            </RX.ScrollView>
        );
    }
}
