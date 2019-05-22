import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IWebPartPropertiesMetadata } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'HtmlSampleWebPartStrings';
import HtmlSample from './components/HtmlSample';
import { IHtmlSampleProps } from './components/IHtmlSampleProps';

export interface IHtmlSampleWebPartProps {
  htmlString:string;
}

export default class HtmlSampleWebPart extends BaseClientSideWebPart<IHtmlSampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHtmlSampleProps > = React.createElement(
      HtmlSample,
      {
        htmlString:this.properties.htmlString
      }
      
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get propertiesMetadata(): IWebPartPropertiesMetadata {

    return {      
      'htmlString':  { isHtmlString: true },
    };
    
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('htmlString', {
                  label: 'HTML String',
                  multiline:true,
                  rows:10
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
