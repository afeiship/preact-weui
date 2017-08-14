import {Component, h} from 'preact';
import classNames from 'classnames';


export default class extends Component {

  static defaultProps = {
    spacing: true
  };

  render({children,spacing}) {
    return (
      <section className={classNames('page__bd', {'page__bd_spacing': spacing})}>
        {children}
      </section>
    )
  }
}
