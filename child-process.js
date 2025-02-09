import { spawn } from 'node:child_process';
const ls = spawn('nmap', ['-sn', '192.168.2.0/24'], {shell: true});

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});