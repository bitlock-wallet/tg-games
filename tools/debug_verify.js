import crypto from 'crypto';

// YOUR DATA FROM THE LOGS
const BOT_TOKEN = "8279460307:AAFL3vYV7cdrp3HNhnz9NmwGeKtWZfKYBgc"; 
const initData = "query_id=AAEYtXZGAgAAABi1dkZUCjaS&user=%7B%22id%22%3A5477152024%2C%22first_name%22%3A%22Edin%22%2C%22last_name%22%3A%22%C4%86ehi%C4%87%22%2C%22username%22%3A%22ceedin02%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F0JJN_EKFN97CA0bUEsBThaZg3tA8iUQp_hfSqPtyRc26fti2McS0xpSvJbAzqzCb.svg%22%7D&auth_date=1763469938&signature=0lJvGbXYs6Y4bSspMXgEp2AyFSZo1qR35Ezl8XWtz_p8yx38IfufaYztA0N2SUcgyZGHCuKKc3DDqoed325yAA&hash=52d965df8d6414a7029aa21206c82ddb6c38c99ab0c58672d69bee4015051a0e";

function check(token, data, includeSig) {
    const params = new URLSearchParams(data);
    const hash = params.get('hash');
    const pairs = [];
    
    for (const [key, value] of params.entries()) {
        if (key === 'hash') continue;
        if (!includeSig && key === 'signature') continue;
        pairs.push(`${key}=${value}`);
    }
    
    pairs.sort();
    const checkString = pairs.join('\n');
    
    const secret = crypto.createHmac('sha256', 'WebAppData').update(token).digest();
    const calcHash = crypto.createHmac('sha256', secret).update(checkString).digest('hex');
    
    console.log(`\n--- Testing Mode: Include Signature = ${includeSig} ---`);
    // console.log(`Check String:\n${checkString}`); // Uncomment to see exact string
    console.log(`Calculated: ${calcHash}`);
    console.log(`Expected:   ${hash}`);
    console.log(`MATCH:      ${calcHash === hash}`);
}

console.log('Verifying with token:', BOT_TOKEN);
check(BOT_TOKEN, initData, false); // Standard (Exclude Signature)
check(BOT_TOKEN, initData, true);  // Modified (Include Signature)