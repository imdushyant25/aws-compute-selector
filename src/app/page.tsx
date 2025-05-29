"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight, Server, Cloud, ArrowLeft, DollarSign, Lightbulb, AlertCircle } from "lucide-react"

// AWS Service Icon Components
const AWSLambdaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M7.5 3.75L3 7.5l4.5 3.75V3.75zm9 0v7.5L21 7.5l-4.5-3.75zM7.5 20.25L3 16.5l4.5-3.75v7.5zm9-7.5v7.5L21 16.5l-4.5-3.75zM12 12l-3-3h6l-3 3z"/>
  </svg>
)

const AWSECSIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="6" y="9" width="3" height="6" fill="currentColor"/>
    <rect x="10.5" y="9" width="3" height="6" fill="currentColor"/>
    <rect x="15" y="9" width="3" height="6" fill="currentColor"/>
  </svg>
)

const AWSFargateIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM12 4.5L19.5 8 12 11.5 4.5 8 12 4.5zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z"/>
  </svg>
)

const AWSEC2Icon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="16" cy="8" r="1" fill="currentColor"/>
    <circle cx="8" cy="16" r="1" fill="currentColor"/>
    <circle cx="16" cy="16" r="1" fill="currentColor"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const AWSAppRunnerIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
    <path d="M10.5 7.5h3v9h-3z"/>
    <path d="M7 10.5h10v3H7z"/>
  </svg>
)

const AWSBeanstalkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10zm4 0V7l5 5-5 5z"/>
  </svg>
)

const AWSBatchIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <rect x="2" y="4" width="20" height="3" rx="1"/>
    <rect x="2" y="8.5" width="20" height="3" rx="1"/>
    <rect x="2" y="13" width="20" height="3" rx="1"/>
    <rect x="2" y="17.5" width="20" height="3" rx="1"/>
  </svg>
)

const AWSLightsailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 11v6"/>
    <path d="M6 21h12"/>
    <path d="M9 17h6"/>
  </svg>
)

const AWSEKSIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="7" r="1.5"/>
    <circle cx="7" cy="12" r="1.5"/>
    <circle cx="17" cy="12" r="1.5"/>
    <circle cx="12" cy="17" r="1.5"/>
    <line x1="12" y1="8.5" x2="12" y2="15.5" stroke="currentColor"/>
    <line x1="8.5" y1="12" x2="15.5" y2="12" stroke="currentColor"/>
  </svg>
)

const AWSSageMakerIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 1v6m0 8v6M4.22 4.22l4.24 4.24m8.48 8.48l4.24 4.24M1 12h6m8 0h6M4.22 19.78l4.24-4.24m8.48-8.48l4.24-4.24"/>
  </svg>
)

const AWSOutpostsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="8" y1="21" x2="8" y2="3" stroke="currentColor"/>
    <line x1="16" y1="21" x2="16" y2="3" stroke="currentColor"/>
    <line x1="2" y1="9" x2="22" y2="9" stroke="currentColor"/>
    <line x1="2" y1="15" x2="22" y2="15" stroke="currentColor"/>
  </svg>
)
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

interface Question {
  id: string
  title: string
  description: string
  type: "radio" | "slider" | "checkbox" | "multi-select"
  options?: {
    value: string
    label: string
    description: string
  }[]
  sliderConfig?: {
    min: number
    max: number
    step: number
    unit: string
    labels: string[]
  }
  checkboxOptions?: {
    value: string
    label: string
    description: string
  }[]
}

interface Recommendation {
  service: string
  icon: React.ReactNode
  description: string
  useCases: string[]
  pricing: string
  pricingExamples: {
    scenario: string
    monthlyEstimate: string
    details: string
  }[]
  pros: string[]
  cons: string[]
  bestFor: string[]
  complexity: "Low" | "Medium" | "High"
  cost: "Low" | "Medium" | "High"
  matchScore: number
  alternatives?: string[]
  deploymentTime: string
  resourceRequirements: string
  realWorldExample: string
}

const questions: Question[] = [
  {
    id: "workload-type",
    title: "What type of workload are you running?",
    description: "This helps determine the most suitable compute model for your application.",
    type: "radio",
    options: [
      {
        value: "web-app",
        label: "Web Application",
        description: "Traditional web apps, REST APIs, or websites with user interfaces",
      },
      {
        value: "batch-processing",
        label: "Batch Processing",
        description: "Data processing, ETL jobs, analytics, or scheduled background tasks",
      },
      {
        value: "microservices",
        label: "Microservices",
        description: "Containerized apps, distributed architecture, or service mesh",
      },
      {
        value: "event-driven",
        label: "Event-driven Functions",
        description: "Functions triggered by events, webhooks, or real-time processing",
      },
      {
        value: "machine-learning",
        label: "Machine Learning",
        description: "ML training, inference, data science workloads, or AI applications",
      },
      {
        value: "databases",
        label: "Database Workloads",
        description: "Database servers, data warehouses, or persistent storage systems",
      },
      {
        value: "hpc",
        label: "High Performance Computing",
        description: "Scientific computing, simulations, or compute-intensive tasks",
      },
    ],
  },
  {
    id: "management-preference",
    title: "How much infrastructure management do you want?",
    description: "Consider your team's expertise and operational preferences.",
    type: "radio",
    options: [
      {
        value: "no-management",
        label: "Zero Management (Serverless)",
        description: "Focus only on code, AWS handles everything else automatically",
      },
      {
        value: "minimal-management",
        label: "Minimal Management",
        description: "Some configuration but mostly managed, with easy scaling",
      },
      {
        value: "moderate-management",
        label: "Moderate Management",
        description: "Balance of control and convenience, some ops responsibility",
      },
      {
        value: "full-control",
        label: "Full Control",
        description: "Complete control over infrastructure, OS, and configurations",
      },
    ],
  },
  {
    id: "scale-requirements",
    title: "What are your scaling requirements?",
    description: "Consider both current needs and future growth expectations.",
    type: "radio",
    options: [
      {
        value: "zero-to-scale",
        label: "Zero to Scale",
        description: "Scale from 0 to thousands instantly, handle traffic spikes",
      },
      {
        value: "auto-scale",
        label: "Automatic Scaling",
        description: "Scale up/down automatically based on metrics and demand",
      },
      {
        value: "predictable-scale",
        label: "Predictable Scaling",
        description: "Known traffic patterns, can plan scaling in advance",
      },
      {
        value: "consistent-load",
        label: "Consistent Load",
        description: "Steady, predictable workload with minimal variation",
      },
      {
        value: "manual-scale",
        label: "Manual Scaling",
        description: "Prefer to control scaling manually when needed",
      },
    ],
  },
  {
    id: "runtime-duration",
    title: "How long do your processes typically run?",
    description: "This affects cost optimization and service selection.",
    type: "radio",
    options: [
      {
        value: "milliseconds",
        label: "Milliseconds to Seconds",
        description: "Quick API calls, simple functions, instant responses",
      },
      {
        value: "short",
        label: "Short (< 15 minutes)",
        description: "Quick processing tasks, lightweight batch jobs",
      },
      {
        value: "medium",
        label: "Medium (15 minutes - 4 hours)",
        description: "Standard applications, medium batch jobs, data processing",
      },
      {
        value: "long",
        label: "Long (4+ hours)",
        description: "Long-running services, persistent applications, always-on systems",
      },
    ],
  },
  {
    id: "performance-requirements",
    title: "What are your performance requirements?",
    description: "Select the performance characteristics that matter most to you.",
    type: "checkbox",
    checkboxOptions: [
      {
        value: "low-latency",
        label: "Low Latency",
        description: "Sub-100ms response times, real-time processing",
      },
      {
        value: "high-throughput",
        label: "High Throughput",
        description: "Process large volumes of requests or data",
      },
      {
        value: "cpu-intensive",
        label: "CPU Intensive",
        description: "Computation-heavy workloads, complex algorithms",
      },
      {
        value: "memory-intensive",
        label: "Memory Intensive",
        description: "Large datasets in memory, caching, in-memory databases",
      },
      {
        value: "gpu-required",
        label: "GPU Required",
        description: "Machine learning, graphics processing, parallel computing",
      },
      {
        value: "storage-intensive",
        label: "Storage Intensive",
        description: "Large file processing, databases, data warehousing",
      },
    ],
  },
  {
    id: "cost-priority",
    title: "How important is cost optimization?",
    description: "Slide to indicate your cost sensitivity (left = cost-sensitive, right = performance-first).",
    type: "slider",
    sliderConfig: {
      min: 0,
      max: 100,
      step: 10,
      unit: "%",
      labels: ["Cost First", "Balanced", "Performance First"],
    },
  },
  {
    id: "team-experience",
    title: "What's your team's AWS experience level?",
    description: "This helps recommend services that match your team's expertise.",
    type: "radio",
    options: [
      {
        value: "beginner",
        label: "Beginner",
        description: "New to AWS, prefer simple solutions with good defaults",
      },
      {
        value: "intermediate",
        label: "Intermediate",
        description: "Some AWS experience, comfortable with managed services",
      },
      {
        value: "advanced",
        label: "Advanced",
        description: "Experienced with AWS, comfortable with complex architectures",
      },
      {
        value: "expert",
        label: "Expert",
        description: "AWS expert, want full control and optimization capabilities",
      },
    ],
  },
  {
    id: "integration-needs",
    title: "Which AWS services do you need to integrate with?",
    description: "Select the AWS services your application will work with.",
    type: "checkbox",
    checkboxOptions: [
      {
        value: "rds",
        label: "RDS/Databases",
        description: "Relational databases, Aurora, DynamoDB",
      },
      {
        value: "s3",
        label: "S3 Storage",
        description: "Object storage, file processing, static assets",
      },
      {
        value: "api-gateway",
        label: "API Gateway",
        description: "REST/GraphQL APIs, API management",
      },
      {
        value: "sqs-sns",
        label: "SQS/SNS Messaging",
        description: "Message queues, notifications, event-driven architecture",
      },
      {
        value: "cloudfront",
        label: "CloudFront CDN",
        description: "Content delivery, global distribution",
      },
      {
        value: "elasticsearch",
        label: "OpenSearch/Elasticsearch",
        description: "Search engines, log analytics, full-text search",
      },
    ],
  },
]

const serviceRecommendations: Record<string, Recommendation> = {
  lambda: {
    service: "AWS Lambda",
    icon: <AWSLambdaIcon />,
    description: "Serverless compute service that runs code in response to events with automatic scaling",
    useCases: ["API backends", "Event processing", "Data transformation", "Scheduled tasks", "Webhooks"],
    pricing: "Pay per request and compute time (GB-seconds)",
    pricingExamples: [
      {
        scenario: "Small API (1M requests/month)",
        monthlyEstimate: "$1.83",
        details: "1M requests × $0.20/1M + 400,000 GB-sec × $0.0000166667"
      },
      {
        scenario: "Medium workload (10M requests/month)",
        monthlyEstimate: "$18.34",
        details: "Includes free tier: 1M requests + 400,000 GB-seconds monthly"
      },
      {
        scenario: "Large scale (100M requests/month)",
        monthlyEstimate: "$183.40",
        details: "High volume with consistent usage patterns"
      }
    ],
    pros: ["No server management", "Automatic scaling", "Pay-per-use pricing", "Built-in monitoring"],
    cons: ["15-minute execution limit", "Cold start latency", "Limited runtime environments"],
    bestFor: ["Event-driven apps", "Microservices", "API backends", "Batch processing"],
    complexity: "Low",
    cost: "Low",
    matchScore: 0,
    alternatives: ["ECS Fargate", "App Runner"],
    deploymentTime: "5-15 minutes",
    resourceRequirements: "Memory: 128MB-10GB, Timeout: 15 minutes max",
    realWorldExample: "Netflix uses Lambda for video encoding and real-time file processing at massive scale"
  },
  ecs: {
    service: "Amazon ECS",
    icon: <AWSECSIcon />,
    description: "Fully managed container orchestration service for Docker containers",
    useCases: ["Containerized applications", "Microservices", "Batch processing", "Web applications"],
    pricing: "Pay for underlying compute (EC2 or Fargate)",
    pricingExamples: [
      {
        scenario: "Small web app (2 vCPU, 4GB RAM)",
        monthlyEstimate: "$59.64",
        details: "Fargate: $0.04048/vCPU-hour + $0.004445/GB-hour × 730 hours"
      },
      {
        scenario: "Medium workload (4 vCPU, 8GB RAM)",
        monthlyEstimate: "$148.85",
        details: "With load balancing and auto scaling across 2 AZs"
      },
      {
        scenario: "Production cluster (EC2 + ALB)",
        monthlyEstimate: "$250-500",
        details: "3 m5.large instances + Application Load Balancer"
      }
    ],
    pros: ["Container support", "AWS integration", "Flexible scaling", "Service discovery"],
    cons: ["Container complexity", "Requires Docker knowledge", "More setup than serverless"],
    bestFor: ["Containerized apps", "Microservices", "Mixed workloads", "CI/CD pipelines"],
    complexity: "Medium",
    cost: "Medium",
    matchScore: 0,
    alternatives: ["EKS", "Fargate", "EC2"],
    deploymentTime: "30-60 minutes",
    resourceRequirements: "Minimum 0.25 vCPU, 512MB RAM per task",
    realWorldExample: "Spotify uses ECS to run containerized microservices for music streaming platform"
  },
  fargate: {
    service: "AWS Fargate",
    icon: <AWSFargateIcon />,
    description: "Serverless compute for containers without managing servers or clusters",
    useCases: ["Containerized microservices", "Batch jobs", "Web applications", "APIs"],
    pricing: "Pay for vCPU and memory resources used",
    pros: ["No server management", "Container support", "Automatic scaling", "Security isolation"],
    cons: ["Higher cost than EC2", "Less control", "Limited instance types"],
    bestFor: ["Serverless containers", "Microservices", "Batch processing", "Modern apps"],
    complexity: "Low",
    cost: "Medium",
    matchScore: 0,
    alternatives: ["Lambda", "ECS on EC2", "App Runner"],
  },
  ec2: {
    service: "Amazon EC2",
    icon: <AWSEC2Icon />,
    description: "Virtual servers in the cloud with complete control over the computing environment",
    useCases: ["Legacy applications", "Custom environments", "High-performance computing", "Persistent workloads"],
    pricing: "Pay for instance hours, various pricing models (On-Demand, Reserved, Spot)",
    pricingExamples: [
      {
        scenario: "Small web server (t3.micro)",
        monthlyEstimate: "$8.47",
        details: "On-demand: $0.0116/hour × 730 hours (includes free tier eligible)"
      },
      {
        scenario: "Medium app server (t3.medium)",
        monthlyEstimate: "$30.37",
        details: "$0.0416/hour × 730 hours, 2 vCPU, 4GB RAM"
      },
      {
        scenario: "Reserved instance (1-year, no upfront)",
        monthlyEstimate: "$21.61",
        details: "t3.medium reserved saves ~29% vs on-demand pricing"
      }
    ],
    pros: ["Complete control", "Wide variety of instance types", "Flexible configuration", "Cost optimization options"],
    cons: ["Requires infrastructure management", "Manual scaling setup", "OS maintenance"],
    bestFor: ["Legacy apps", "Custom requirements", "Long-running services", "Cost optimization"],
    complexity: "High",
    cost: "Low",
    matchScore: 0,
    alternatives: ["Lightsail", "ECS", "Beanstalk"],
    deploymentTime: "15-30 minutes",
    resourceRequirements: "1 vCPU, 1GB RAM minimum - scales to 448 vCPUs, 24TB RAM",
    realWorldExample: "Airbnb runs thousands of EC2 instances for their booking platform and data processing"
  },
  apprunner: {
    service: "AWS App Runner",
    icon: <AWSAppRunnerIcon />,
    description: "Fully managed service for building and running containerized web applications and APIs",
    useCases: ["Web applications", "APIs", "Frontend applications", "Simple microservices"],
    pricing: "Pay for compute and memory used, plus requests",
    pricingExamples: [
      {
        scenario: "Basic web app (0.25 vCPU, 0.5GB)",
        monthlyEstimate: "$12.60",
        details: "Provisioned capacity: $7/month + compute time + requests"
      },
      {
        scenario: "API service (1 vCPU, 2GB)",
        monthlyEstimate: "$35.20",
        details: "Includes provisioned capacity + actual usage billing"
      },
      {
        scenario: "Production app with auto-scaling",
        monthlyEstimate: "$50-150",
        details: "Varies based on traffic patterns and scaling needs"
      }
    ],
    pros: ["Easy deployment", "Automatic scaling", "Built-in load balancing", "Simple configuration"],
    cons: ["Limited customization", "Newer service", "Less ecosystem support"],
    bestFor: ["Simple web apps", "APIs", "Quick prototypes", "Beginner-friendly deployments"],
    complexity: "Low",
    cost: "Medium",
    matchScore: 0,
    alternatives: ["Beanstalk", "Lambda", "Fargate"],
    deploymentTime: "10-20 minutes",
    resourceRequirements: "0.25-4 vCPU, 0.5GB-12GB RAM configurations",
    realWorldExample: "Startups use App Runner for rapid MVP deployment and testing new features"
  },
  beanstalk: {
    service: "AWS Elastic Beanstalk",
    icon: <AWSBeanstalkIcon />,
    description: "Easy-to-use platform for deploying and managing web applications and services",
    useCases: ["Web applications", "API services", "Development environments", "Quick deployments"],
    pricing: "No additional charges, pay for underlying AWS resources",
    pros: ["Easy deployment", "Multiple platform support", "Monitoring included", "Version management"],
    cons: ["Less control than EC2", "Platform limitations", "Can be complex for advanced use cases"],
    bestFor: ["Web applications", "Rapid development", "Platform-based apps", "Teams wanting simplicity"],
    complexity: "Low",
    cost: "Medium",
    matchScore: 0,
    alternatives: ["App Runner", "ECS", "Lambda"],
  },
  batch: {
    service: "AWS Batch",
    icon: <AWSBatchIcon />,
    description: "Fully managed batch processing service for running jobs at any scale",
    useCases: ["Data processing", "ETL jobs", "Scientific computing", "Image/video processing", "ML training"],
    pricing: "Pay for underlying compute resources used",
    pros: ["Optimized for batch workloads", "Automatic resource provisioning", "Job queuing", "Spot instance support"],
    cons: ["Not for real-time processing", "Learning curve", "Overhead for simple tasks"],
    bestFor: ["Batch processing", "Data pipelines", "Scientific computing", "Large-scale processing"],
    complexity: "Medium",
    cost: "Low",
    matchScore: 0,
    alternatives: ["Lambda", "ECS", "EC2"],
  },
  lightsail: {
    service: "Amazon Lightsail",
    icon: <AWSLightsailIcon />,
    description: "Simple virtual private servers with predictable pricing for small-scale applications",
    useCases: ["Simple web applications", "Development environments", "Small databases", "WordPress sites", "Learning"],
    pricing: "Fixed monthly pricing starting at $3.50/month",
    pros: ["Simple setup", "Predictable pricing", "Includes networking and storage", "Great for beginners"],
    cons: ["Limited scalability", "Fewer advanced features", "Not suitable for enterprise"],
    bestFor: ["Simple projects", "Learning AWS", "Small websites", "Development environments"],
    complexity: "Low",
    cost: "Low",
    matchScore: 0,
    alternatives: ["EC2", "Beanstalk", "App Runner"],
  },
  eks: {
    service: "Amazon EKS",
    icon: <AWSEKSIcon />,
    description: "Managed Kubernetes service for running containerized applications",
    useCases: ["Container orchestration", "Microservices", "Multi-cloud deployments", "Enterprise applications"],
    pricing: "$0.10 per hour per cluster + worker node costs",
    pros: ["Industry-standard Kubernetes", "Portable workloads", "Rich ecosystem", "Advanced orchestration"],
    cons: ["Kubernetes complexity", "Higher learning curve", "Additional management overhead"],
    bestFor: ["Complex containerized apps", "Multi-cloud strategy", "Kubernetes expertise", "Enterprise workloads"],
    complexity: "High",
    cost: "Medium",
    matchScore: 0,
    alternatives: ["ECS", "Fargate", "EC2"],
  },
  sagemaker: {
    service: "Amazon SageMaker",
    icon: <AWSSageMakerIcon />,
    description: "Fully managed machine learning platform for model building, training, and deployment",
    useCases: ["ML model training", "Model deployment", "Data science", "AI applications", "AutoML"],
    pricing: "Pay for compute instances, storage, and model endpoints used",
    pros: ["Built-in ML algorithms", "Jupyter notebooks", "Model management", "Auto-scaling inference"],
    cons: ["ML-specific", "Can be expensive", "Learning curve for non-ML teams"],
    bestFor: ["Machine learning", "Data science", "AI applications", "Model deployment"],
    complexity: "Medium",
    cost: "High",
    matchScore: 0,
    alternatives: ["EC2 with ML AMIs", "Lambda for inference", "Batch for training"],
  },
  outposts: {
    service: "AWS Outposts",
    icon: <AWSOutpostsIcon />,
    description: "Fully managed service that extends AWS infrastructure to on-premises locations",
    useCases: ["Hybrid cloud", "Data residency requirements", "Low latency", "On-premises integration"],
    pricing: "Monthly pricing for Outposts rack, plus usage-based pricing",
    pros: ["True hybrid cloud", "AWS services on-premises", "Low latency", "Data residency compliance"],
    cons: ["High cost", "Physical installation required", "Limited service availability"],
    bestFor: ["Hybrid architectures", "Data residency", "Low latency requirements", "Enterprise"],
    complexity: "High",
    cost: "High",
    matchScore: 0,
    alternatives: ["EC2", "Local Zones", "Wavelength"],
  },
}

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | number | string[]>>({})
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: string, value: string | number | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateRecommendations = (answers: Record<string, string | number | string[]>): Recommendation[] => {
    const services = Object.keys(serviceRecommendations)
    const scored = services.map(serviceId => {
      const service = { ...serviceRecommendations[serviceId] }
      let score = 0
      let maxScore = 0

      // Workload type scoring (weight: 30)
      const workloadType = answers["workload-type"]
      maxScore += 30
      if (workloadType === "event-driven" && ["lambda", "fargate"].includes(serviceId)) score += 30
      else if (workloadType === "batch-processing" && ["batch", "lambda", "ecs"].includes(serviceId)) score += 25
      else if (workloadType === "microservices" && ["ecs", "fargate", "eks", "lambda"].includes(serviceId)) score += 30
      else if (workloadType === "web-app" && ["apprunner", "beanstalk", "ecs", "ec2", "lightsail"].includes(serviceId)) score += 25
      else if (workloadType === "machine-learning" && serviceId === "sagemaker") score += 30
      else if (workloadType === "hpc" && ["ec2", "batch"].includes(serviceId)) score += 25
      else if (workloadType === "databases" && ["ec2", "lightsail"].includes(serviceId)) score += 20
      else score += 5

      // Management preference scoring (weight: 25)
      const managementPref = answers["management-preference"]
      maxScore += 25
      if (managementPref === "no-management" && ["lambda", "fargate", "apprunner", "sagemaker"].includes(serviceId)) score += 25
      else if (managementPref === "minimal-management" && ["beanstalk", "ecs", "lightsail", "batch"].includes(serviceId)) score += 20
      else if (managementPref === "moderate-management" && ["ecs", "eks", "ec2"].includes(serviceId)) score += 15
      else if (managementPref === "full-control" && ["ec2", "eks", "outposts"].includes(serviceId)) score += 25
      else score += 5

      // Runtime duration scoring (weight: 20)
      const runtimeDuration = answers["runtime-duration"]
      maxScore += 20
      if (runtimeDuration === "milliseconds" && serviceId === "lambda") score += 20
      else if (runtimeDuration === "short" && ["lambda", "fargate", "batch"].includes(serviceId)) score += 18
      else if (runtimeDuration === "medium" && ["ecs", "fargate", "apprunner", "beanstalk"].includes(serviceId)) score += 15
      else if (runtimeDuration === "long" && ["ec2", "ecs", "lightsail"].includes(serviceId)) score += 20
      else score += 8

      // Scale requirements scoring (weight: 15)
      const scaleReq = answers["scale-requirements"]
      maxScore += 15
      if (scaleReq === "zero-to-scale" && ["lambda", "fargate"].includes(serviceId)) score += 15
      else if (scaleReq === "auto-scale" && ["lambda", "ecs", "fargate", "apprunner"].includes(serviceId)) score += 12
      else if (scaleReq === "predictable-scale" && ["ecs", "beanstalk", "ec2"].includes(serviceId)) score += 10
      else if (scaleReq === "consistent-load" && ["ec2", "lightsail"].includes(serviceId)) score += 12
      else if (scaleReq === "manual-scale" && ["ec2", "lightsail"].includes(serviceId)) score += 15
      else score += 5

      // Performance requirements scoring (weight: 10)
      const perfReqs = (answers["performance-requirements"] as string[]) || []
      maxScore += 10
      if (perfReqs.includes("gpu-required") && ["ec2", "sagemaker", "batch"].includes(serviceId)) score += 10
      else if (perfReqs.includes("low-latency") && ["lambda", "ec2", "fargate"].includes(serviceId)) score += 8
      else if (perfReqs.includes("high-throughput") && ["ecs", "ec2", "batch"].includes(serviceId)) score += 8
      else if (perfReqs.includes("cpu-intensive") && ["ec2", "batch", "ecs"].includes(serviceId)) score += 7
      else if (perfReqs.includes("memory-intensive") && ["ec2", "ecs", "sagemaker"].includes(serviceId)) score += 7
      else score += 3

      // Cost priority adjustment
      const costPriority = (answers["cost-priority"] as number) || 50
      if (costPriority < 30 && service.cost === "Low") score += 5
      else if (costPriority > 70 && service.cost === "High") score -= 5

      // Team experience adjustment
      const teamExp = answers["team-experience"]
      if (teamExp === "beginner" && service.complexity === "Low") score += 5
      else if (teamExp === "expert" && service.complexity === "High") score += 3
      else if (teamExp === "beginner" && service.complexity === "High") score -= 5

      service.matchScore = Math.round((score / maxScore) * 100)
      return service
    })

    return scored
      .filter(service => service.matchScore > 30)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const recs = calculateRecommendations(answers)
      setRecommendations(recs)
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const restart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setRecommendations([])
    setShowResults(false)
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 py-8 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-4">
              <Server className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Your AWS Compute Recommendations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Based on your answers, here are the best AWS compute services perfectly tailored for your needs
            </p>
          </div>

          {recommendations.length === 0 ? (
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="text-center py-16">
                <AlertCircle className="h-16 w-16 mx-auto mb-6 text-gray-400" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">No Perfect Match Found</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                  Your requirements are quite unique! Consider reviewing your answers or consulting with an AWS solutions architect.
                </p>
                <Button onClick={restart} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 text-lg">
                  Try Again
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-8">
              {recommendations.map((rec, index) => (
                <Card key={rec.service} className={`border-0 shadow-2xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] ${
                  index === 0 ? "ring-4 ring-blue-500/30 ring-offset-4" : ""
                }`}>
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-6">
                        <div className={`p-4 rounded-2xl ${
                          index === 0 ? "bg-gradient-to-r from-blue-600 to-indigo-700" :
                          index === 1 ? "bg-gradient-to-r from-slate-600 to-blue-700" :
                          "bg-gradient-to-r from-indigo-600 to-blue-800"
                        }`}>
                          <div className="text-white">{rec.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <CardTitle className="text-2xl font-bold text-gray-800">{rec.service}</CardTitle>
                            {index === 0 && (
                              <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 text-sm font-semibold">
                                🏆 Best Match
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-lg px-3 py-1 font-semibold border-2">
                              {rec.matchScore}% match
                            </Badge>
                          </div>
                          <CardDescription className="text-lg text-gray-600 leading-relaxed">
                            {rec.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Badge 
                          variant={rec.complexity === "Low" ? "default" : rec.complexity === "Medium" ? "secondary" : "destructive"}
                          className="text-sm px-3 py-1 font-semibold"
                        >
                          {rec.complexity} Complexity
                        </Badge>
                        <Badge 
                          variant={rec.cost === "Low" ? "default" : rec.cost === "Medium" ? "secondary" : "destructive"}
                          className="text-sm px-3 py-1 font-semibold"
                        >
                          {rec.cost} Cost
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8 pt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-3 text-gray-800">
                          <Lightbulb className="h-6 w-6 text-blue-600" />
                          Perfect For
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {rec.bestFor.map((item, idx) => (
                            <Badge key={idx} className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-2 text-sm font-medium">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-3 text-gray-800">
                          <DollarSign className="h-6 w-6 text-green-600" />
                          Pricing Model
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed">{rec.pricing}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4 text-green-700">✅ Key Benefits</h3>
                        <ul className="space-y-3">
                          {rec.pros.map((pro, idx) => (
                            <li key={idx} className="text-base text-gray-700 flex items-start gap-2">
                              <span className="text-green-600 font-bold">•</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4 text-orange-700">⚠️ Considerations</h3>
                        <ul className="space-y-3">
                          {rec.cons.map((con, idx) => (
                            <li key={idx} className="text-base text-gray-700 flex items-start gap-2">
                              <span className="text-orange-600 font-bold">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {rec.alternatives && rec.alternatives.length > 0 && (
                      <div className="bg-gradient-to-br from-indigo-50 to-slate-50 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4 text-indigo-700">🔄 Alternative Options</h3>
                        <div className="flex flex-wrap gap-3">
                          {rec.alternatives.map((alt, idx) => (
                            <Badge key={idx} className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-3 py-2 text-sm font-medium">
                              {alt}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 pt-4">
                      <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-3 text-base font-semibold">
                        <a
                          href={`https://aws.amazon.com/${rec.service.toLowerCase().replace(/\s+/g, "-").replace("aws-", "").replace("amazon-", "")}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More →
                        </a>
                      </Button>
                      <Button variant="outline" asChild size="lg" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 text-base font-semibold">
                        <a
                          href={`https://docs.aws.amazon.com/${rec.service.toLowerCase().replace(/\s+/g, "-").replace("aws-", "").replace("amazon-", "")}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📚 Documentation
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center pt-8">
            <Button onClick={restart} variant="outline" size="lg" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 text-lg font-semibold">
              🔄 Start Over
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const currentAnswer = answers[question.id]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-4">
            <Cloud className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
            Smart AWS Compute Service Selector
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Answer these questions to get personalized AWS compute service recommendations tailored perfectly for your project
          </p>
          <div className="flex justify-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 text-lg font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
        </div>

        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800 leading-tight">{question.title}</CardTitle>
            <CardDescription className="text-lg text-gray-600 leading-relaxed">{question.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {question.type === "radio" && (
              <RadioGroup value={currentAnswer as string} onValueChange={(value) => handleAnswer(question.id, value)}>
                {question.options?.map((option) => (
                  <div key={option.value} className="flex items-start space-x-4 p-6 rounded-2xl border-2 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer group">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1 w-5 h-5" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="text-lg font-semibold cursor-pointer text-gray-800 group-hover:text-blue-700">
                        {option.label}
                      </Label>
                      <p className="text-base text-gray-600 mt-2 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            )}

            {question.type === "slider" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                  <Slider
                    value={[(currentAnswer as number) || 50]}
                    onValueChange={(value) => handleAnswer(question.id, value[0])}
                    max={question.sliderConfig?.max || 100}
                    min={question.sliderConfig?.min || 0}
                    step={question.sliderConfig?.step || 1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-base font-medium text-gray-700 mt-4">
                    {question.sliderConfig?.labels?.map((label, idx) => (
                      <span key={idx}>{label}</span>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 text-lg font-semibold">
                      {currentAnswer || 50}{question.sliderConfig?.unit || ""}
                    </Badge>
                  </div>
                </div>
              </div>
            )}

            {question.type === "checkbox" && (
              <div className="grid md:grid-cols-2 gap-4">
                {question.checkboxOptions?.map((option) => (
                  <div key={option.value} className="flex items-start space-x-4 p-6 rounded-2xl border-2 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer group">
                    <Checkbox
                      id={option.value}
                      checked={(currentAnswer as string[])?.includes(option.value) || false}
                      onCheckedChange={(checked) => {
                        const current = (currentAnswer as string[]) || []
                        if (checked) {
                          handleAnswer(question.id, [...current, option.value])
                        } else {
                          handleAnswer(question.id, current.filter((v: string) => v !== option.value))
                        }
                      }}
                      className="mt-1 w-5 h-5"
                    />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="text-lg font-semibold cursor-pointer text-gray-800 group-hover:text-blue-700">
                        {option.label}
                      </Label>
                      <p className="text-base text-gray-600 mt-2 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between pt-8">
              <Button 
                variant="outline" 
                onClick={prevQuestion} 
                disabled={currentQuestion === 0}
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 text-base font-semibold disabled:opacity-50"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
              <Button 
                onClick={nextQuestion} 
                disabled={
                  !currentAnswer || 
                  (Array.isArray(currentAnswer) && currentAnswer.length === 0) ||
                  (question.type === "slider" && currentAnswer === undefined)
                }
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 text-base font-semibold disabled:opacity-50"
              >
                {currentQuestion === questions.length - 1 ? "🎯 Get Recommendations" : "Next"}
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex justify-between text-lg font-medium text-gray-700">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="w-full h-3" />
        </div>
      </div>
    </div>
  )
}