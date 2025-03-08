# Odoo Combat Project

## Overview
Odoo Combat is an educational platform built on a microservices architecture, integrating gaming elements with learning management. The platform connects students, teachers, and administrators through interactive quizzes, PDF processing, and video analysis capabilities.

## Project Structure

```
ODOO-COMBAT-MAIN
├── backend server
│   ├── controllers
│   ├── models
│   ├── node_modules
│   ├── routes
│   ├── .gitignore
│   ├── cloudinary.js
│   ├── connection.js
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── Front-end-servers
│   ├── frontend-server-admin
│   ├── frontend-server-student
│   ├── frontend-server-teacher
│   └── package-lock.json
├── MLOps
│   ├── llm_pdf_server
│   └── llm_video_server
└── sign-in server
    ├── index.html
    ├── script.js
    ├── style.css
    └── package-lock.json
```

## Key Features
- **Interactive Quiz Game**: "Fight the Question Bot" with engaging game-like UI
- **User Role Management**: Dedicated interfaces for students, teachers, and administrators
- **Analytics Dashboard**: Comprehensive metrics and visualizations for all user types
- **AI-Powered Document Analysis**: PDF processing with LLM integration
- **Video Processing**: Automatic audio extraction and analysis
- **Responsive UI**: Modern interface with metrics, charts, and interactive elements

## Technology Stack

### Backend
- **Node.js/Express**: Core server framework
- **MongoDB**: Database (MongoDB Atlas)
- **Multer**: File upload handling
- **Cloudinary**: Media storage and processing

### Frontend
- **React**: User interface framework
- **Tailwind CSS**: Styling
- **Chart libraries**: Data visualization

### MLOps
- **Flask**: Python microservices
- **LangChain**: Document processing
- **Google Generative AI**: Embedding and LLM capabilities
- **FAISS**: Vector database for semantic search
- **MoviePy**: Video processing

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- Python (v3.8+)
- MongoDB
- Cloudinary account
- Google API key for Generative AI

### Backend Setup
1. Clone the repository
   ```
   git clone <repository-url>
   cd ODOO-COMBAT-MAIN/backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create `.env` file with the following:
   ```
   PORT=7000
   MONGO_URL=mongodb+srv://<username>:<password>@cluster0.yplhl9e.mongodb.net/
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Start the server
   ```
   npm start
   ```

### Frontend Setup (for each frontend server)
1. Navigate to frontend directory
   ```
   cd ODOO-COMBAT-MAIN/Front-end-servers/frontend-server-admin
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Repeat for student and teacher frontends

### MLOps Setup

#### PDF Server
1. Navigate to the PDF server directory
   ```
   cd ODOO-COMBAT-MAIN/MLOps/llm_pdf_server
   ```

2. Create virtual environment
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies
   ```
   pip install flask flask-cors langchain-community langchain-google-genai faiss-cpu numpy python-dotenv
   ```

4. Create `.env` file with:
   ```
   GOOGLE_KEY=your_google_api_key
   ```

5. Start the server
   ```
   python app.py
   ```

#### Video Server
1. Navigate to the video server directory
   ```
   cd ODOO-COMBAT-MAIN/MLOps/llm_video_server
   ```

2. Create virtual environment (if not already created)
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies
   ```
   pip install flask flask-cors moviepy
   ```

4. Start the server
   ```
   python app.py
   ```

## API Endpoints

### Backend Server
- `/api/admin` - Admin routes
- `/api/signin` - Authentication routes
- `/api/student` - Student routes
- `/quiz` - Quiz functionality
- `/post_media` - Media upload endpoint

### PDF Server
- `/ask` (POST) - Process and store PDF
- `/query` (POST) - Query the processed PDF
- `/delete_pdf` (DELETE) - Remove processed PDF

### Video Server
- `/` (POST) - Upload video and extract audio
- `/delete` (POST) - Delete processed files
- `/acknowledgment` (POST) - Status check

## User Interfaces

### Admin Dashboard
- Teacher and student management
- Analytics and metrics visualization
- Test monitoring

### Student Interface
- Quiz participation
- Learning resources
- Performance tracking

### Teacher Interface
- Content management
- Student monitoring
- Quiz creation

## Deployment
The application is designed to be deployed as individual microservices, with each component capable of scaling independently.

### Deployment Recommendations
- Backend services: Render, Heroku, or AWS EC2
- Frontend applications: Vercel, Netlify, or Firebase Hosting
- MLOps microservices: Cloud Run, Heroku, or dedicated instances
- Database: MongoDB Atlas (cloud-hosted)

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
[Your License Information]

## Contact
[Your Contact Information]
