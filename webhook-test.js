const url = 'https://api.github.com/repos/dwhiteGUK/next-emotion-typescript/dispatches';
const githubPAT = "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"; // keep this secret

async function webhookTest() {
  const res = await fetch(url, {
    json: {
      event_type: 'webhook',
    },
    headers: {
      Authorization: "token " + githubPAT,
    },
  });

  console.log('🚀 ~ file: webhook-test.js ~ line 11 ~ res', res)
}

webhookTest();


