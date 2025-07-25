# Terraform-Task-1

This repository contains a Terraform portfolio project that guides users through the steps required to install and configure Terraform on a Windows system. It also showcases a portfolio web application built with TypeScript and Next.js.

## Project Overview

The project demonstrates:
- How to download and install Terraform from HashiCorp's official website.
- Extraction of the Terraform executable.
- Setting up system environment variables for Terraform.
- Adding Terraform to the system PATH.
- Verifying the installation of Terraform.

## Installation Steps (as illustrated in the app)

1. **Download Terraform**
   - Go to [Terraform Downloads](https://developer.hashicorp.com/terraform/downloads) and download the Windows AMD64 zip file.

2. **Extract Files**
   - Extract the downloaded zip file (e.g., to `C:\terraform`).

3. **Configure Environment Variables**
   - Open System Properties (`sysdm.cpl`), then click on "Environment Variables".

4. **Add Terraform to PATH**
   - In the Environment Variables window, add the Terraform directory (e.g., `C:\terraform\terraform_1.12.2_windows_amd64`) to the system PATH.

5. **Verify Installation**
   - Open a new terminal and run `terraform -v` to confirm successful installation.

## Repository Structure

- `app/` - Contains the main Next.js application including portfolio steps.
- `components/`, `hooks/`, `lib/`, `public/`, `styles/` - Supporting code and assets for the web app.
- Configuration files: `next.config.mjs`, `package.json`, `tsconfig.json`.

## Live Demo

You can view the deployed project at:  
[https://terraform-task-1.vercel.app](https://terraform-task-1.vercel.app)

## License

No license specified.

---

For more information, visit the [GitHub repository page](https://github.com/GouravSittam/Terraform-Task-1).
