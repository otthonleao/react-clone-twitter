import { useIndex } from "../../data/hooks/pages/useIndex.page.js";
import styles from "../styles/pages/index.module.css";
import TextInput from "../../components/inputs/TextInputs/TextInput.jsx";
import Tweet from "../../components/data-display/tweet/Tweet.jsx";

const tweet = {
	date: 'há 10 dias',
	text: 'Meu primeiro Tweet from const `tweet` no Index.jsx',
	user: {
		name: 'Otthon Leão',
		username: 'otliaum',
		picture: "https://github.com/otthonleao.png",
	},
};

export default function Index() {
	useIndex();
	return (
		<div>
			<TextInput />
			<Tweet tweet={tweet}></Tweet>
		</div>
	);
}
