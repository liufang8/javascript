var i, sum;
for (i = 0, sum = 0; i < 100000; i++) {
	sum += i;
}
postMessage(sum);
