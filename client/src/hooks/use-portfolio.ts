import { useMutation } from "@tanstack/react-query";
import { skills, projects, certifications } from "@/lib/data";

export function useSkills() {
  return { data: skills, isLoading: false };
}

export function useProjects() {
  return { data: projects, isLoading: false };
}

export function useCertifications() {
  return { data: certifications, isLoading: false };
}

export function useTestimonials() {
  return { data: [], isLoading: false };
}

export function useSendMessage() {
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      console.log("Static mode: message intercepted:", data);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true };
    },
  });
}
