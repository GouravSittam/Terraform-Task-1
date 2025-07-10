import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Terminal,
  Download,
  Settings,
  CheckCircle,
  Cloud,
  Code,
} from "lucide-react";

export default function TerraformPortfolio() {
  const steps = [
    {
      id: "T1",
      title: "Step 1: Download Terraform",
      description: "Downloaded Terraform from HashiCorp's official website",
      image: "/images/t1.png",
      details:
        "Visited https://developer.hashicorp.com/terraform/downloads and downloaded the Windows AMD64 zip file",
      icon: <Download className="h-5 w-5" />,
    },
    {
      id: "T2",
      title: "Step 2: Extract Terraform Files",
      description: "Extracted the zip file to C:\\terraform directory",
      image: "/images/t2.png",
      details:
        "Successfully extracted terraform.exe and LICENSE.txt files to the designated folder",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: "T3",
      title: "Step 3: Access System Properties",
      description:
        "Opened System Properties to configure environment variables",
      image: "/images/t3.png",
      details:
        "Accessed System Properties via sysdm.cpl and clicked on Environment Variables button",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      id: "T4",
      title: "Step 4: Environment Variables Dialog",
      description: "Opened Environment Variables configuration window",
      image: "/images/t4.png",
      details:
        "Accessed both User and System variables to configure PATH for Terraform",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      id: "T5",
      title: "Step 5: Add Terraform to PATH",
      description: "Added Terraform directory to system PATH variable",
      image: "/images/t5.png",
      details:
        "Added C:\\terraform\\terraform_1.12.2_windows_amd64 to the PATH environment variable",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      id: "T6",
      title: "Step 6: Verify Installation",
      description: "Successfully verified Terraform installation",
      image: "/images/t6.png",
      details:
        "Ran 'terraform -v' command and confirmed Terraform v1.12.2 installation",
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gourav</h1>
              <p className="text-lg text-gray-600">Registration No: 12203224</p>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Cloud className="h-5 w-5 mr-2" />
              Terraform Task 1
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Overview */}
        {/* Removed Terraform AWS EC2 configuration code block and command cards as requested */}

        {/* Installation Steps */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Installation Process
          </h2>

          {steps.map((step, index) => (
            <Card key={step.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-semibold">
                    {index + 1}
                  </div>
                  {step.icon}
                  <div>
                    <div className="flex items-center gap-2">
                      {step.title}
                      <Badge variant="outline">{step.id}</Badge>
                    </div>
                  </div>
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-gray-700">{step.details}</p>
                    {step.id === "T6" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-green-800 font-semibold mb-2">
                          <CheckCircle className="h-5 w-5" />
                          Installation Successful
                        </div>
                        <p className="text-green-700 text-sm">
                          Terraform v1.12.2 is now ready to use for
                          infrastructure automation
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-sm w-full h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <Separator className="my-8" />
        <div className="text-center text-gray-600">
          <p className="mb-2">
            Portfolio by <strong>Gourav</strong> | Registration No:{" "}
            <strong>12203224</strong>
          </p>
          <p className="text-sm">
            Terraform Infrastructure as Code - AWS EC2 Instance Deployment
          </p>
        </div>
      </div>
    </div>
  );
}
