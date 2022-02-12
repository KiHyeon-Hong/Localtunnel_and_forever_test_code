## Localtunnel and forever test code

### install

```bash
git clone https://github.com/KiHyeon-Hong/Localtunnel_and_forever_test_code.git
cd Localtunnel_and_forever_test_code
npm i
```

```bash
sudo npm install -g localtunnel
sudo npm install -g forever
```

### Usage

```bash
sudo forever start mainController.js && lt --port 65001 > ./files/url.txt
```
