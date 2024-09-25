'use client'

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDown, LogOut, User } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347'];

const CustomTooltip = ({ active, payload, colors }) => {
    if (active && payload && payload.length) {
        const data = payload[0];
        return (
            <div className="custom-tooltip bg-black bg-opacity-80 p-2 border-none">
                <p style={{ color: colors[payload[0].name] }}>{`${data.name} : $${data.value}`}</p>
            </div>
        );
    }
    return null;
};

// Placeholder functions for database operations
const fetchTransactions = async (userId) => {
    // TODO: Implement actual database fetch
    return [
        { id: 1, description: 'Rent Payment', amount: -400, date: '2024-09-20' },
        { id: 2, description: 'Salary', amount: 3000, date: '2024-09-15' },
        { id: 3, description: 'Grocery Shopping', amount: -150, date: '2024-09-18' },
        { id: 4, description: 'Electricity Bill', amount: -50, date: '2024-09-22' },
    ];
};

const addTransactionToDb = async (userId, transaction) => {
    // TODO: Implement actual database insert
    console.log('Adding transaction to database:', transaction);
};

const removeTransactionFromDb = async (userId, transactionId) => {
    // TODO: Implement actual database delete
    console.log('Removing transaction from database:', transactionId);
};

export default function Dashboard({ user = { id: 1, name: 'John Doe', email: 'john@example.com' } }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({ description: '', amount: '', date: '' });
    const [expenseData, setExpenseData] = useState([]);
    const [aiSummary, setAiSummary] = useState('');
    const [colorMap, setColorMap] = useState({});

    useEffect(() => {
        const loadTransactions = async () => {
            const fetchedTransactions = await fetchTransactions(user.id);
            setTransactions(fetchedTransactions);
        };
        loadTransactions();
    }, [user.id]);

    useEffect(() => {
        updateExpenseData();
        updateAiSummary();
    }, [transactions]);

    const updateExpenseData = () => {
        const expenseCategories = {};
        transactions.forEach(transaction => {
            if (transaction.amount < 0) {
                const category = transaction.description.split(' ')[0];
                expenseCategories[category] = (expenseCategories[category] || 0) + Math.abs(transaction.amount);
            }
        });
        const newExpenseData = Object.entries(expenseCategories).map(([name, value]) => ({ name, value }));
        setExpenseData(newExpenseData);

        const newColorMap = {};
        newExpenseData.forEach((item, index) => {
            newColorMap[item.name] = COLORS[index % COLORS.length];
        });
        setColorMap(newColorMap);
    };

    const updateAiSummary = () => {
        const totalIncome = transactions.reduce((sum, t) => t.amount > 0 ? sum + t.amount : sum, 0);
        const totalExpenses = transactions.reduce((sum, t) => t.amount < 0 ? sum + Math.abs(t.amount) : sum, 0);
        const savings = totalIncome - totalExpenses;
        const largestExpense = transactions.reduce((max, t) => t.amount < max.amount ? t : max, { amount: 0 });

        setAiSummary(`Based on your recent transactions, your total income is $${totalIncome} and your total expenses are $${totalExpenses}. You've saved $${savings}. Your largest expense was ${largestExpense.description} at $${Math.abs(largestExpense.amount)}. Consider reviewing your expenses to increase savings.`);
    };

    const addTransaction = async (e) => {
        e.preventDefault();
        const newId = Math.max(...transactions.map(t => t.id), 0) + 1;
        const transaction = { ...newTransaction, id: newId, amount: parseFloat(newTransaction.amount) };
        await addTransactionToDb(user.id, transaction);
        setTransactions([...transactions, transaction]);
        setNewTransaction({ description: '', amount: '', date: '' });
    };

    const removeTransaction = async (id) => {
        await removeTransactionFromDb(user.id, id);
        setTransactions(transactions.filter(t => t.id !== id));
    };

    const handleLogout = () => {
        // TODO: Implement logout functionality
        console.log('Logging out');
    };

    const Card = ({ title, value, icon }) => (
        <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">{title}</h3>
                <span className="text-xl">{icon}</span>
            </div>
            <p className="text-2xl font-bold">${value.toLocaleString()}</p>
        </div>
    );

    const totalIncome = transactions.reduce((sum, t) => t.amount > 0 ? sum + t.amount : sum, 0);
    const totalExpenses = transactions.reduce((sum, t) => t.amount < 0 ? sum + Math.abs(t.amount) : sum, 0);
    const totalSavings = totalIncome - totalExpenses;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-6">
            <div className="max-w-7xl mx-auto bg-black bg-opacity-30 rounded-xl p-6 backdrop-blur-sm">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2 text-white"
                        >
                            <User size={20} />
                            <span>{user.name}</span>
                            <ChevronDown size={20} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden z-10">
                                <div className="p-4">
                                    <p className="text-sm">{user.email}</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-white hover:bg-opacity-20"
                                >
                                    <LogOut size={20} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card title="Total Income" value={totalIncome} icon="💰" />
                    <Card title="Total Expenses" value={totalExpenses} icon="💳" />
                    <Card title="Total Savings" value={totalSavings} icon="📈" />
                    <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium">Financial Health</h3>
                            <span className="text-xl" role="img" aria-label="Health">🏥</span>
                        </div>
                        <p className="text-sm">{totalSavings > 0 ? "Good" : "Needs Improvement"}</p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
                        <h3 className="text-xl font-bold mb-4">Expense Breakdown</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={expenseData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {expenseData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip colors={colorMap} />} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
                        <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
                        <ul className="space-y-2 max-h-60 overflow-y-auto">
                            {transactions.map(transaction => (
                                <li key={transaction.id} className="flex items-center justify-between py-2 border-b border-white border-opacity-20 last:border-0">
                                    <span className="text-sm">{transaction.description}</span>
                                    <div className="flex items-center">
                    <span className={`text-sm font-medium mr-2 ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                      {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toLocaleString()}
                    </span>
                                        <button onClick={() => removeTransaction(transaction.id)} className="text-red-500 hover:text-red-700">
                                            ❌
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-white bg-opacity-10 rounded-lg p-4 text-white">
                    <h3 className="text-xl font-bold mb-4">Add New Transaction</h3>
                    <form onSubmit={addTransaction} className="flex flex-wrap gap-4">
                        <input
                            type="text"
                            placeholder="Description"
                            value={newTransaction.description}
                            onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                            className="flex-grow p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Amount (use - for expenses)"
                            value={newTransaction.amount}
                            onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                            className="flex-grow p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300"
                            required
                        />
                        <input
                            type="date"
                            value={newTransaction.date}
                            onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
                            className="flex-grow p-2 rounded bg-white bg-opacity-20 text-white"
                            required
                        />
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Add Transaction
                        </button>
                    </form>
                </div>

                <div className="mt-6 bg-white bg-opacity-10 rounded-lg p-4 text-white">
                    <h3 className="text-xl font-bold mb-4">AI Financial Summary</h3>
                    <p>{aiSummary}</p>
                </div>
            </div>
        </div>
    );
}