USE peerfund;

-- Inserting Credit Grades data
INSERT INTO credit_grades (grade, limit_max, limit_min, createdAt, updatedAt)
VALUES
('A', 25000, 0, NOW(), NOW()),
('B', 15000, 0, NOW(), NOW()),
('C', 8000, 0, NOW(), NOW()),
('D', 4000, 0, NOW(), NOW()),
('E', 1000, 0, NOW(), NOW());

-- Insert sample data into the BorrowerAccount table
INSERT INTO borrower_accounts (userId, creditGradeId, status, credit_score, createdAt, updatedAt)
VALUES
(2, 2, 'active', 700, NOW(), NOW()),
(4, 5, 'active', 650, NOW(), NOW());

-- Insert sample data into the InvestorAccount table
INSERT INTO investor_accounts (userId, subscription_status, account_balance, level, status, createdAt, updatedAt)
VALUES
(1, 'active', 10000.00, 'Experienced', 'active', NOW(), NOW()),
(3, 'active', 5000.00, 'Beginner', 'active', NOW(), NOW());

-- Insert sample data into the LoanRequest table
INSERT INTO loan_requests (borrowerAccountId, amount, expiry_date, purpose, description, loan_period, payment_term, status, investment_id, term_amount, assesment_fee, transaction_info, createdAt, updatedAt)
VALUES
(1, 5000.00, '2023-12-31', 'education', 'Education expenses', 12, 'monthly', 'new', NULL, NULL, NULL, '{"info": "Sample transaction info"}', NOW(), NOW()),
(2, 10000.00, '2023-11-30', 'home', 'Home improvement', 24, 'byweekly', 'approved', NULL, NULL, NULL, '{"info": "Another sample transaction info"}', NOW(), NOW()),
(2, 7500.00, '2023-12-15', 'car', 'Car purchase', 18, 'monthly', 'new', NULL, NULL, NULL, '{"info": "Car loan transaction"}', NOW(), NOW()),
(2, 12000.00, '2023-10-31', 'creditcard', 'Credit card debt consolidation', 36, 'weekly', 'new', NULL, NULL, NULL, '{"info": "Credit card debt loan"}', NOW(), NOW()),
(1, 8000.00, '2023-11-15', 'bills', 'Medical bills', 24, 'byweekly', 'approved', NULL, NULL, NULL, '{"info": "Medical bills loan"}', NOW(), NOW()),
(1, 15000.00, '2023-09-30', 'wedding', 'Wedding expenses', 48, 'monthly', 'approved', NULL, NULL, NULL, '{"info": "Wedding loan transaction"}', NOW(), NOW()),
(2, 9000.00, '2023-08-31', 'debt', 'Debt consolidation', 12, 'byweekly', 'new', NULL, NULL, NULL, '{"info": "Debt consolidation loan"}', NOW(), NOW()),
(2, 11000.00, '2023-07-15', 'car', 'Car loan for a used car', 24, 'monthly', 'new', NULL, NULL, NULL, '{"info": "Used car loan"}', NOW(), NOW()),
(2, 6000.00, '2023-06-30', 'education', 'Education loan for a certification', 18, 'weekly', 'approved', NULL, NULL, NULL, '{"info": "Education loan"}', NOW(), NOW()),
(1, 12000.00, '2023-05-15', 'home', 'Home renovation loan', 36, 'monthly', 'new', NULL, NULL, NULL, '{"info": "Home renovation transaction"}', NOW(), NOW()),
(2, 10000.00, '2023-04-30', 'other', 'Miscellaneous expenses', 24, 'byweekly', 'new', NULL, NULL, NULL, '{"info": "Miscellaneous expenses loan"}', NOW(), NOW()),
(2, 13000.00, '2023-03-15', 'wedding', 'Wedding planning loan', 48, 'monthly', 'approved', NULL, NULL, NULL, '{"info": "Wedding planning loan"}', NOW(), NOW()),
(1, 7000.00, '2023-02-28', 'car', 'Car loan for a new vehicle', 18, 'weekly', 'approved', NULL, NULL, NULL, '{"info": "New car loan"}', NOW(), NOW()),
(1, 11000.00, '2023-01-15', 'creditcard', 'Credit card debt settlement', 36, 'monthly', 'new', NULL, NULL, NULL, '{"info": "Credit card debt settlement loan"}', NOW(), NOW());
