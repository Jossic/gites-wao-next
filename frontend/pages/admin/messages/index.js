import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListMessages from '../../../components/admin/lists/ListMessages';
import {
	countMessageNonLus,
	listAllMessages,
} from '../../../actions/messageActions';

const Message = ({ messages, newMessages }) => {
	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<h2 style={{ color: 'white' }}>
						Consulter les messages reçus
					</h2>

					<hr />
					<ListMessages
						messages={messages}
						newMessages={newMessages}
					/>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const res1 = await listAllMessages();
	const messages = await res1;
	console.log('messages', messages);
	const res3 = await countMessageNonLus();
	const newMessages = await res3;
	console.log('newMessages', newMessages);
	return {
		props: {
			messages,
			newMessages,
		},
	};
}

export default Message;
