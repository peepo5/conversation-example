<script>
	import * as convo from './components/conversation';

	/* Theme Handling */
	var theme = 'light'; //Default Theme
	let lsgi = localStorage.getItem('theme');
	if(lsgi){ theme = lsgi; };
	document.documentElement.setAttribute("data-theme", theme);

	const theme_switch = () => {
		theme = ( {
    		'light': 'dark',
			'dark': 'light',
		} )[ theme ];
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem('theme', theme);
	};

	/* Comment Handling */
	let username = "";
	let message = "";
	let comments = convo.initiate_comments(localStorage.getItem('user-comments'));
	let sortedcomments;

	const change_sort = (num) => {
		sortedcomments = convo.sort_comments(num, comments);
	}
	change_sort(1);

	const submit_comment = (event) => {
		switch(true){
			case (event.keyCode == 13 && [username, message].every(Boolean)):
				comments.push({name: username, time: Date.now(), comment: message});
				sortedcomments = convo.sort_comments(selected.id, comments);
				localStorage.setItem('user-comments', JSON.stringify(comments));
				comments = comments; //Force update so svelte detects change
		}
	}

	/* Question Handling */
	let questions = [
		{ id: 1, text: `Sort by Newest` },
		{ id: 2, text: `Sort by Oldest` },
	];

	let selected = questions[0];
</script>

<main>
	<button on:click={() => theme_switch()}>Theme: {convo.to_title_case(theme)}</button>
	<div class="convo">
		<h1 class="ib head"><b>Conversation</b></h1>
		<p class="ib commentcounter">{comments.length} Comment{#if comments.length != 1}s{/if}</p>
		<hr class="rule">
		<input class="namebox" bind:value={username} type="textbox" spellcheck="false" placeholder="Your Username">
		<br><input class="messagebox" bind:value={message} type="textbox" placeholder="What do you think?" on:keydown={submit_comment}>
		<!-- svelte-ignore a11y-no-onchange -->

		<div class="selectfather">
		<select class="selector" bind:value={selected} on:change={change_sort(selected['id'])}>
			{#each questions as question}
				<option class="selectoption" value={question}>
					{question.text}
				</option>
			{/each}
		</select>
		</div>
		<br>
		{#each sortedcomments as { name, comment, time }}
			<div class="commentblock">

				<p class="commentname"><b>{name}</b></p>
				<p class="commenttime">{convo.time_format(time)}</p>
				<p class="commentmessage">{comment}</p>
			</div>
		{/each}
	</div>
</main>

<style>
</style>