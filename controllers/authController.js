const users = []; // Temporary array to store users

exports.register = (req, res) => {
    const { username, password } = req.body;
    const userExists = users.find(user => user.username === username);
    
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    users.push({ username, password, balance: 1000 });
    res.status(201).json({ message: 'User registered successfully' });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    res.status(200).json({ message: 'Login successful', balance: user.balance });
};
