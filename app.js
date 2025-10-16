        
        loadStudents();
        loadDashboardData();
        showAlert('Aluno cadastrado com sucesso!', 'success');
        
    } catch (error) {
        showAlert(error.message, 'danger');
    } finally {
        showLoading(false);
    }
}
