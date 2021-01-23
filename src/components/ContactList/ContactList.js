import s from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
             <li className={ s.contcatList} key={id}>
                <p className={s.contactText}>{name}: {number}</p>
                <button type="button" onClick={() => onDelete(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default ContactList;
