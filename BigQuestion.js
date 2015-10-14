console.log('Hello world')
console.log('Let me ask you a big question')
console.log('Tell me at least two possible right answers of 1+1.')
//array or object and flow controle

var answer = [2,0]
var first = 'Let me see your first answer, well yes, '
var second = 'Now, what is your second answer? Okey, '
console.log('my answer is' + answer[0] + 'or' + answer[1])

function result(){
	if (answer[0] == 2) {
		console.log(first + 'it is just a fair answer.')
	}
	if (answer[1] == 2) {
		console.log(second + 'it is just a fair answer.')
	}
	if (answer[0] == 0) {
		console.log(first + 'it seems you have comprehended the fundimental truth of existence.')
	}
	if (answer[1] == 0) {
		console.log(second + 'it seems you have comprehended the fundimental truth of existence.')
	}
	if (answer[0] == 1) {
		console.log(first + 'they have unified.')
	}
	if (answer[1] == 1) {
		console.log(second + 'they have unified.')
	}
	if (answer[0] < 0 {
		console.log(first + 'sometimes it happens when two of them do not get along.')
    }
    if (answer[1] < 0 {
		console.log(second + 'sometimes it happens when two of them do not get along.')
	}
	if (answer[0] > 2 {
		console.log(first + 'optimist! what a rare soul!')
	}
    if (answer[1] > 2 {
		console.log(second + 'optimist! what a rare soul!')
	}
}

