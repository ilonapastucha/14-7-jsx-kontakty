var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    let contacts = props.items.map(function(contact) {
      return <Contact contact={contact} key={contact.id}/>;
    });

    return (
      <ul className="contactList">
        {contacts}
      </ul>
    );
  }
});