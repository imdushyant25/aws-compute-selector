# AWS Compute Selector

A smart, interactive tool to help you choose the perfect AWS compute service for your project. Built with Next.js and featuring a professional blue design with custom AWS service icons.

## Features

- 🎯 **Intelligent Recommendations**: Answer 8 targeted questions to get personalized AWS compute service suggestions
- 🏗️ **Comprehensive Coverage**: Covers all major AWS compute services (Lambda, ECS, Fargate, EC2, App Runner, Beanstalk, Batch, Lightsail, EKS, SageMaker, Outposts)
- 🎨 **Professional Design**: Clean blue color scheme with custom SVG icons for each AWS service
- 📊 **Detailed Comparisons**: View pricing estimates, pros/cons, use cases, and real-world examples
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Interactive**: Smooth animations and intuitive questionnaire flow

## AWS Services Covered

- **AWS Lambda** - Serverless functions
- **Amazon ECS** - Container orchestration
- **AWS Fargate** - Serverless containers
- **Amazon EC2** - Virtual machines
- **AWS App Runner** - Simple containerized web apps
- **AWS Elastic Beanstalk** - Platform-as-a-Service
- **AWS Batch** - Batch processing
- **Amazon Lightsail** - Simple cloud servers
- **Amazon EKS** - Managed Kubernetes
- **Amazon SageMaker** - Machine learning platform
- **AWS Outposts** - Hybrid cloud

## Getting Started

### Development

```bash
# Clone the repository
git clone https://github.com/imdushyant25/aws-compute-selector.git
cd aws-compute-selector

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Deployment

#### Deploy to AWS Amplify

1. Push your code to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click "New app" → "Host web app"
4. Connect your GitHub repository
5. Amplify will automatically detect the Next.js configuration
6. Deploy with zero configuration needed!

#### Deploy to Vercel

```bash
npm run build
```

Deploy using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## How It Works

1. **Answer Questions**: Complete an 8-question assessment covering:
   - Workload type (web apps, batch processing, microservices, etc.)
   - Management preferences (serverless vs. full control)
   - Scaling requirements
   - Runtime duration
   - Performance needs
   - Cost priorities
   - Team experience level
   - Integration requirements

2. **Get Recommendations**: Receive up to 3 personalized service recommendations ranked by compatibility

3. **Compare Options**: Review detailed comparisons including:
   - Service descriptions and use cases
   - Pricing models and estimates
   - Pros and cons
   - Complexity and cost ratings
   - Alternative options
   - Real-world examples

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom gradients
- **UI Components**: Radix UI primitives
- **Icons**: Custom AWS service SVG icons + Lucide React
- **TypeScript**: Full type safety
- **Deployment**: AWS Amplify / Vercel ready

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add support for additional AWS services
- Improve the recommendation algorithm
- Enhance the UI/UX

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the AWS community