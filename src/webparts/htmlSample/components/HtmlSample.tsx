import * as React from 'react';
import styles from './HtmlSample.module.scss';
import { IHtmlSampleProps } from './IHtmlSampleProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HtmlSample extends React.Component<IHtmlSampleProps, {}> {
  public render(): React.ReactElement<IHtmlSampleProps> {
    return (
      <div className={ styles.htmlSample }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>This is a sample webpart that stores html content</span>
              <div dangerouslySetInnerHTML={{__html: this.props.htmlString}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
