var Contact = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      <div className="contactItem">
            <img className="contactImage" src='http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'/>
            <p className="contactLabel">Imię: {this.props.contact.firstName}</p>
            <p className="contactLabel">Nazwisko: {this.props.contact.lastName}</p>
            <a className="contactEmail" href={'mailto:' + this.props.contact.email}>{this.props.contact.email}</a>
        </div>
    );
  }
});