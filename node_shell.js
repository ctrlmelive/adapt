const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'bc249f45-7f7e-4bd0-94a3-c499c1a28c79'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
