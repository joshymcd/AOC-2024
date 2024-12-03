var x = `
Aws.CloudwatchLogGroup
/aws/application/dev-casenotes-api
Aws.CloudwatchRegion
eu-west-1
Chat.Database
yk_casenotes
Chat.Password
yk-messag3-2019
Chat.Server
yk-development-messengerv2-cluster.cluster-cr9r09xfmdd2.eu-west-1.rds.amazonaws.com
Chat.User
yk_messenger
`;

///
var array = x.split("\n").filter(Boolean);

console.log(array);

let res = `eb setenv `;

for (var i = 0; i < array.length; i++) {
  const val = array[i];
  const isOdd = i % 2 === 0;

  if (isOdd) {
    res += `${val}=`;
  }else{
    res += `'${val}' `;
  } 
}

console.log(res.trim());